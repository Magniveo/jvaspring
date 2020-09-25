package mag.filedemo.filedemo.controllers;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import mag.filedemo.filedemo.response.MessageResponse;

import org.springframework.web.bind.annotation.PostMapping;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/fileload")
public class FileLoadController{
    
    @PostMapping
    public ResponseEntity<?> loadFile(@RequestParam("file") MultipartFile file) {
        return ResponseEntity.ok(new MessageResponse("File loaded!"));
    }
}