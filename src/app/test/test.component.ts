import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = 'santhosh';
  public siteUrl = window.location.href;
  public myId = "myTestId";

  constructor() { }

  ngOnInit(): void {
  }

}
