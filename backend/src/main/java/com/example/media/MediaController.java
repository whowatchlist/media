package com.example.media;

import com.example.media.model.Item;
import com.example.media.model.MediaType;
import com.example.media.model.Progress;
import com.example.media.model.Rating;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
public class MediaController {

    List<Item> mediaList = Collections.singletonList(new Item(15, "Project Hail Mary", MediaType.BOOK, new Rating(10),"A very good sci-fi book", new Progress(Optional.empty(), true)));


    @GetMapping("/list")
    public List<Item> getData() {
        return mediaList;
    }
}
