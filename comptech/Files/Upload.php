<?php

namespace Comptech\Files;

use Illuminate\Http\Request;
use Storage;
use Exception;
use InterventionImage;
use Comptech\Http\Response;

class Upload
{

    public static function ToPublicFolder(Request $request)
    {
        try
        {
            $image = InterventionImage::make($request->file);
            $original_file_name = md5(time()) . '-' . $request->file->getClientOriginalName();
            $file_name = $request->folder . '/' . $original_file_name;
            $full_name = str_replace('\\', '/', config('filesystems.disks.public.root')) . '/' . $file_name;
            $min_size = min($image->height(), $image->width());
            $image->fit($min_size, $min_size)->save($full_name);
            return Response::Success('Fișierul a fost încărcat cu succes', [
                'file_url' => $file_name,
                'full_file_path' => $full_name,
                'width' => $image->width(),
                'height' => $image->height(),
                'size' => $image->filesize(),
            ]);
        }
        catch(Exception $e)
        {
            return Response::Exception($e, [], 'Ceva s-a întâmplat în timpul încărcării fișierului. Acesta nu a fost încărcat. Vă rugăm încercați mai târziu.');
        }
    }

	public static function ToAWSS3(Request $request)
	{
		try
        {
            $image = InterventionImage::make($request->file);
            $original_file_name = md5(time()) . '-' . $request->file->getClientOriginalName();
            $file_name = $request->folder . '/' . $original_file_name;

            if( ($request->action == 'fit') && $request->width && $request->height )
            {
                $image->fit($request->width, $request->height, function ($constraint) {
                    $constraint->upsize();
                });
            }
            else
            {
                if( ($request->action == 'resize') && $request->width && $request->height )
                {
                    if( ($request->width < $image->width()) && ($request->height < $image->height()) )
                    {
                        if($image->width() > $image->height())
                        {
                            $image->resize($request->width, null, function ($constraint) {
                                $constraint->aspectRatio();
                                $constraint->upsize();
                            });
                        }
                        else
                        {
                            $image->resize(null, $request->height, function ($constraint) {
                                $constraint->aspectRatio();
                                $constraint->upsize();
                            });
                        }
                    }
                }
                else
                {
                    $max_size = max($image->height(), $image->width());
                    $image->fit($max_size, $max_size);
                }
            }
            Storage::disk('s3')->put($file_name, $image->stream()->__toString(), 'public');
            return Response::Success('Fișierul a fost încărcat cu succes', [
                'file_url' => Storage::disk('s3')->url($file_name),
                'full_file_path' => NULL,
                'width' => $image->width(),
                'height' => $image->height(),
                'size' => $image->filesize(),
                'request' => $request->all(),
            ]);
        }
        catch(Exception $e)
        {
            return Response::Exception($e, [], 'Ceva s-a întâmplat în timpul încărcării fișierului. Acesta nu a fost încărcat. Vă rugăm încercați mai târziu.');
        }
	}


}
