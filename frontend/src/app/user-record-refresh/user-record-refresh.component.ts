import { Component, OnInit } from '@angular/core';
import { UserRecordService } from '../user-record/user-record.service';
import { GiphyService } from '../shared/giphy/giphy.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-record-refresh',
  templateUrl: '../user-record-list/user-record-list.component.html', 
  styles: []
})
export class UserRecordRefreshComponent implements OnInit {

    userrecords: Array<any>; 
    
    constructor(private route: ActivatedRoute,
              private router: Router, 
              private userRecordService: UserRecordService, 
              private giphyService: GiphyService) { 
        this.route.params.subscribe(val => {
            this.userRecordService.refresh().subscribe(data => {
                this.userrecords = data;
                for (const record of this.userrecords) {
                    this.giphyService.get(record.username).subscribe(url => record.giphyUrl = url);
                }            
            });
            });          
    }

  ngOnInit() {  
  }

}