package com.technologygroup.challenge.service;

import com.technologygroup.challenge.dto.PostDTO;
import com.technologygroup.challenge.entity.Post;
import com.technologygroup.challenge.exception.ResourceNotFoundException;
import com.technologygroup.challenge.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class PostService {

    private final PostRepository postRepository;

    @Transactional(readOnly = true)
    public List<PostDTO> getAllPosts() {
        log.info("Obteniendo todos los posts");
        List<Post> posts = postRepository.findAllByOrderByCreatedAtDesc();
        return posts.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public PostDTO getPostById(Long id) {
        log.info("Obteniendo post con id: {}", id);
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Post no encontrado con id: " + id));
        return convertToDTO(post);
    }

    @Transactional
    public PostDTO createPost(PostDTO postDTO) {
        log.info("Creando nuevo post: {}", postDTO.getName());
        Post post = convertToEntity(postDTO);
        Post savedPost = postRepository.save(post);
        log.info("Post creado exitosamente con id: {}", savedPost.getId());
        return convertToDTO(savedPost);
    }

    @Transactional
    public PostDTO updatePost(Long id, PostDTO postDTO) {
        log.info("Actualizando post con id: {}", id);
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Post no encontrado con id: " + id));

        post.setName(postDTO.getName());
        post.setDescription(postDTO.getDescription());

        Post updatedPost = postRepository.save(post);
        log.info("Post actualizado exitosamente");
        return convertToDTO(updatedPost);
    }

    @Transactional
    public void deletePost(Long id) {
        log.info("Eliminando post con id: {}", id);
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Post no encontrado con id: " + id));
        postRepository.delete(post);
        log.info("Post eliminado exitosamente");
    }

    private PostDTO convertToDTO(Post post) {
        return new PostDTO(
                post.getId(),
                post.getName(),
                post.getDescription(),
                post.getCreatedAt()
        );
    }

    private Post convertToEntity(PostDTO postDTO) {
        Post post = new Post();
        post.setName(postDTO.getName());
        post.setDescription(postDTO.getDescription());
        return post;
    }
}
