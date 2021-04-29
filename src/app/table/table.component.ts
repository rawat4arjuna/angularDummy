import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-table]',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }
  public table =[
    {
      color: "red",
      value: "#f00"
    },
    {
      color: "green",
      value: "#0f0"
    },
    {
      color: "blue",
      value: "#00f"
    },
    {
      color: "cyan",
      value: "#0ff"
    },
    {
      color: "magenta",
      value: "#f0f"
    },
    {
      color: "yellow",
      value: "#ff0"
    },
    {
      color: "black",
      value: "#000"
    }
  ]


  ngOnInit(): void {
  }

}
