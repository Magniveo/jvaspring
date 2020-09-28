package mag.filedemo.filedemo.controllers;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import mag.filedemo.filedemo.response.MessageResponse;

import org.springframework.web.bind.annotation.PostMapping;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/fileload")
public class FileLoadController {
    private static final String CONTENT_DISPOSITION_KEY = "content-disposition";
    private static final String FILE_NAME_KEY = "filename";
    private static final int BUFFER_SIZE = 6142;
    @PostMapping
    public ResponseEntity<?> loadFile(MultipartFile file, HttpServletRequest request)
            throws IOException, ServletException {
        Map parameters = request.getParameterMap();
        List<ArrayNode> retres = new ArrayList<>();
        ObjectMapper mapper = new ObjectMapper();
 
        //ArrayNode arrayNode = mapper.createArrayNode();
        
        // if will more files than one
        for (Part part : request.getParts()) {
            System.out.println("File Name: " + getFileName(part));
            //retres.add(getTextFromPart(part));
            ///JsonResult prt = getTextFromPart(part);
            ArrayNode arrayNode = getArrayNode(part);
            retres.add(arrayNode);
            retres.add(get2ArrayNode(arrayNode));
            //retres.add(get3ArrayNode(arrayNode));
        }
        return ResponseEntity.ok(retres);
    }
    private String getFileName(Part part) {
        for (String contentDisposition : part.getHeader(CONTENT_DISPOSITION_KEY).split(";")) {
            if (contentDisposition.trim().startsWith(FILE_NAME_KEY)) {
                return contentDisposition.substring(contentDisposition.indexOf('=') + 1).trim().replace("\"", "");
            }
        }
        return null;
    }

    private ArrayNode getArrayNode(Part part) throws IOException {
        BufferedReader reader =
                new BufferedReader(new InputStreamReader(part.getInputStream(), "UTF-8"));
        StringBuilder value = new StringBuilder();
        char[] buffer = new char[BUFFER_SIZE];
        for (int length = 0; (length = reader.read(buffer)) > 0; ) {
            value.append(buffer, 0, length);
        }
        ObjectMapper mapper = new ObjectMapper();
        String[] lines = value.toString().split("\\r?\\n");
        ArrayNode resret = mapper.createArrayNode();
        for(int i = 0; i < lines.length; i ++){
            if(lines[i].contains("#"))
                continue;
            ObjectNode ret = mapper.createObjectNode();
            ret.put(lines[i].toString().split(",")[0], lines[i].toString().split(",")[1]);
            resret.add(ret);
        }
        return resret;
    }
    private ArrayNode get2ArrayNode(ArrayNode arrayNode){
        ObjectMapper mapper = new ObjectMapper();
        ArrayNode resret = mapper.createArrayNode();
        resret.add(getObjectNode("mark01",arrayNode));
        resret.add(getObjectNode("mark17",arrayNode));
        resret.add(getObjectNode("mark23",arrayNode));
        resret.add(getObjectNode("mark35",arrayNode));
        resret.add(getObjectNode("markFV",arrayNode));
        resret.add(getObjectNode("markFX",arrayNode));
        resret.add(getObjectNode("markF",arrayNode));
        //mark01,mark17,mark23,mark35,markFV,markFX,markF
        return resret;
    }
    private ObjectNode getObjectNode(String name, ArrayNode arrayNode){
        ObjectMapper mapper = new ObjectMapper();
        ObjectNode ret = mapper.createObjectNode();
        JsonNode fnd = arrayNode.findValue(name);
        String str = fnd==null? "null" : fnd.asText();
        ret.put(name, str);
        return ret;
    }
    private ArrayNode get3ArrayNode(ArrayNode arrayNode){
        ObjectMapper mapper = new ObjectMapper();
        ArrayNode resret = mapper.createArrayNode();
        return resret;
    }
    private JsonResult getTextFromPart(Part part) throws IOException {
        BufferedReader reader =
                new BufferedReader(new InputStreamReader(part.getInputStream(), "UTF-8"));
        StringBuilder value = new StringBuilder();
        char[] buffer = new char[BUFFER_SIZE];
        for (int length = 0; (length = reader.read(buffer)) > 0; ) {
            value.append(buffer, 0, length);
        }
        String[] lines = value.toString().split("\\r?\\n");
        List<ExpJson> ret;
        JsonResult jsonret = new JsonResult();
        for(int i = 0; i < lines.length; i ++){
            if(lines[i].contains("#"))
                continue;
            ExpJson elem = new ExpJson();
            elem.value = lines[i].toString().split(",")[0];
            String cntr = lines[i].toString().split(",")[1];
            elem.counter = Integer.decode(cntr);
            //System.out.println(elem.value+':'+elem.counter);
            jsonret.addToFirstElement(elem);
        }
        return jsonret;
    }
    private class ExpJson{
        private String value;
        private Integer counter;
        public String getValue(){
            return this.value;
        }
        public void setValue(String value){
            this.value = value;
        }
        public Integer getCounter(){
            return this.counter;
        }
        public void setCounter(Integer counter){
            this.counter = counter;
        }
    }
    private class JsonResult{
        private List<ExpJson> firstanswer = new ArrayList<>();
        private List<ExpJson> secondanswer= new ArrayList<>();
        private List<ExpJson> thirdanswer = new ArrayList<>();

        public void addToFirstElement(ExpJson elm){
            firstanswer.add(elm);
        }
        public List<ExpJson> getFirstanswer() {
            return firstanswer;
        }
        public List<ExpJson> getSecondanswer(){
            return secondanswer;
        }
        public List<ExpJson> getThirdanswer(){
            return thirdanswer;
        }
    }
}