import { Component, OnInit, inject, signal } from '@angular/core';
import { HousesService, House } from './services/houses';
import { Housecard } from './housecard/housecard'; // 1. import เข้ามา

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Housecard], // 2. ใส่ใน imports
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private readonly housesService = inject(HousesService);
  houses = signal<House[]>([]);

  ngOnInit(): void {
    this.housesService.getHouses().subscribe({
      next: (data) => this.houses.set(data),
      error: (err) => console.error('ดึงข้อมูลไม่สำเร็จ:', err)
    });
  }
}