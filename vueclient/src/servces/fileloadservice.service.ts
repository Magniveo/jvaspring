import axios from 'axios';

const API_URL = 'http://localhost:50090/api/fileload';
class FileLoadService{
    async loadfile(file:any){
        let fd = new FormData();
        fd.append('file', file);
        return await axios.post(API_URL,fd,{headers: {
                "Content-Type": "multipart/form-data"
              }});
    }
}
export default new FileLoadService();

//{headers: {
//    "Content-Type": "multipart/form-data"
//  }}