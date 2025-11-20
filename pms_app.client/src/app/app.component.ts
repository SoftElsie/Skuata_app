import { Component, OnInit } from '@angular/core';
import { ModalService } from './domain/services/modal.service';
import { AddRoomComponent } from './components/add-room/add-room.component';
import { AddCaretakerComponent } from './components/add-caretaker/add-caretaker.component';


interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {


  constructor(private modalService: ModalService) {}

  ngOnInit() {
    
  }

  openAddRoomModal() {
    this.modalService.open(AddRoomComponent);
  }

  openAddCaretakerModal() {
    this.modalService.open(AddCaretakerComponent);
  }

  title = 'skuata_app.client';
}