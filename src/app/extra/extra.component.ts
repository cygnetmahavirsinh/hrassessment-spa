import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'fullcalendar';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css']
})
export class ExtraComponent implements OnInit {
  selected: string;
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Dakota',
    'North Carolina',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      $("#calendar").fullCalendar({  
                      header: {
                          left   : 'prev,next today',
                          center : 'title',
                          right  : 'month,agendaWeek,agendaDay'
                      },
                      navLinks   : true,
                      editable   : true,
                      eventLimit : true,
                      events: [
                          {
                              title : 'This is your',
                              start : '2019-03-03T12:30:00',
                              color : '#f9c66a' // override!
                          },
                          {
                              title : 'Your meeting with john',
                              start : '2019-03-07T12:30:00',
                              end   : '2019-03-09',
                              color : "#019efb"
                          },
                          {
                              title  : 'This is Today',
                              start  : '2019-03-12T12:30:00',
                              allDay : false, // will make the time show,
                              color  : "#57cd5f"
                          }
                      ],  // request to load current events
                  });
   }, 100);
  }

}
