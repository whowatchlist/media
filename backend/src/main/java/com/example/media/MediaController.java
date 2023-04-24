package com.example.media;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MediaController {

    @GetMapping
    public String getData() {
        return "Give data";
    }
}
