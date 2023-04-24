package com.example.media.model;

public record Item(int id, String title, MediaType mediaType, Rating rating, String review, Progress progress) {
}
