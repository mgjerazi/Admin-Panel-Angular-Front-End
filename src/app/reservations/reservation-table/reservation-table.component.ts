import { Component, OnInit } from '@angular/core';
import {Reservation, ReservationService} from '../../services/reservation.service';

@Component({
  selector: 'app-reservation-table',
  templateUrl: './reservation-table.component.html',
  styleUrls: ['./reservation-table.component.css']
})
export class ReservationTableComponent implements OnInit {
  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.updateReservations();
  }

  updateReservations(): void {
    this.reservationService.getAll().subscribe(response => {
      this.reservations = response;
    });
  }
}
