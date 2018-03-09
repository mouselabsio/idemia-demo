import { Component, OnInit } from '@angular/core';
import { UserRecordService } from '../user-record/user-record.service';
import { GiphyService } from '../shared/giphy/giphy.service';

@Component({
  selector: 'app-user-record-list',
  templateUrl: './user-record-list.component.html', 
  styles: []
})
export class UserRecordListComponent implements OnInit {

    userrecords: Array<any>; 

    constructor(private userRecordService: UserRecordService, private giphyService: GiphyService) { }

  ngOnInit() {
    this.userRecordService.get().subscribe(data => {
        this.userrecords = data;
        for (const record of this.userrecords) {
            this.giphyService.get(record.username).subscribe(url => record.giphyUrl = url);
        }
    });
  }
}

