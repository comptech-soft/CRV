export default
{
	methods:
    {
        openBrowseForFile()
        {
            this.$emit('open-browse-window');
            $('#' + this.btn_browse_id).trigger('click');
        },

        bindUploadEvent()
        {

            let form_id = '#' + this.form_id;
            let browse_id = form_id + ' #' + this.btn_browse_id;
            let submit_id = form_id + ' #' + this.btn_submit_id;

            let vm = this,  _i = setInterval( () => {

                if( ($(browse_id).length == 1) && ($(submit_id).length == 1) )
                {

                	$(browse_id).off('change').change( function(e){
                        $(submit_id).trigger('click');
                    });

                    $(submit_id).off('click').click( function(e){
                        e.preventDefault();
                        e.stopPropagation();

                        vm.info = null;
                        vm.image = null;

                        let files = $(browse_id).prop('files');
                        if( ! vm.uploaderManager.SetFile(files[0]).Validate() )
                        {
                        	// $(browse_id).val(null);
                        	vm.$emit('upload-validation-fail', vm.info = vm.uploaderManager.Info() )
                        }
                        else
                        {
                        	vm.$emit('upload-validation-success', vm.info = vm.uploaderManager.Info() )
                        	vm.Upload(files[0]);
                        }
                    });
                    clearInterval(_i);
                }
            }, 250);
        },

        Upload(file)
        {
        	let data = new FormData(), vm = this;
        	data.append('file', file);
        	data.append('folder', this.folder);
			data.append('action', this.after_upload.action);
			data.append('width', this.after_upload.width);
			data.append('height', this.after_upload.height);
        	this.$emit('uploading-process-start', {id: this.id, file: file});
            this.uploading = true;
            return axios.request({
                method: 'post', 
                url: this.endpoint, 
                data
            })
            .then( r => {
                let data = r.data
                if(data.success)
                {
                    vm.$emit('uploading-process-end-success', data.result.payload);
                    vm.image = data.result.payload;
                }
                else
                {
                    vm.$emit('uploading-process-end-fail', data.result);
                    vm.image = null;
                }
                vm.uploading = false;
            })
            .catch( error => {
                this.processing = false
                console.log('ERROR.Form Manager::onSubmit()')
                console.log(error)
            })
        }
    },

}
