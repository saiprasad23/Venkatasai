import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {
eventList :any
  eventlist: Object;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getEventList();
  }
  getEventList() {
    let url="http://localhost:8080/event/event/list";
    this.httpClient.get(url).subscribe(response=>{
      this.eventlist = response;
    });
    
  }
  
}