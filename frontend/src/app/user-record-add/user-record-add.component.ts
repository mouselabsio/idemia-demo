import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRecordService } from '../user-record/user-record.service';
import { GiphyService } from '../shared/giphy/giphy.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-user-record-add',
    templateUrl: './user-record-add.component.html',
    styleUrls: ['./user-record-add.css']
    })

export class UserRecordAddComponent implements OnInit, OnDestroy {
    record: any = {};
    
    sub: Subscription;
    
    constructor(private route: ActivatedRoute,
              private router: Router,
              private userRecordService: UserRecordService,
              private giphyService: GiphyService) {
    }

    ngOnInit() {
      }

  ngOnDestroy() {
  }

  gotoList() {
    this.router.navigate(['/user-record-list']); 
  }

  blee(form: NgForm) {
    this.userRecordService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

}