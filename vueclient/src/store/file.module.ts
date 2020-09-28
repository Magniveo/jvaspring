import FileLoadService from '../servces/fileloadservice.service';
export const fileload = {
    namespaced: true,
    state:{
      file:{},
      message:{}  
    },
    actions:{
            loadfile({commit}:any, file:any){
                return FileLoadService.loadfile(file).then(
                    message=>{
                        commit('loadfilesuccess', message);
                        return Promise.resolve(message);
                    }
                );
            },
    },
    mutations:{
        loadfilesuccess(state:any, message:any){
            state.message = message;
        }
    }
}