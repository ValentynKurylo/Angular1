import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostService} from "../services/post.service";
import {Post} from "../models/Post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[]

  constructor(private postServise: PostService) { }

  ngOnInit(): void {
    this.postServise.getPosts().subscribe(value => {this.posts = value})
  }

}
