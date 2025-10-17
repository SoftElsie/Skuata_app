import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-caretaker',
  templateUrl: './manage-caretaker.component.html',
  styleUrls: ['./manage-caretaker.component.css']
})
export class ManageCaretakerComponent implements OnInit {
  caretakers = [
    {
      registerDate: '10/05/2025',
      name: 'John Doe',
      email: 'johndoe@hotmail.com',
      profileImage: 'https://image.com/profile1',
      permission: 'Pending'
    },
    {
      registerDate: '13/06/2025',
      name: 'Katlego Modise',
      email: 'katlemoffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdi@hotmail.com',
      profileImage: 'https://image.com/profile2',
      permission: 'Granted'
    },
    {
      registerDate: '20/08/2025',
      name: 'Mpho Ngobeni',
      email: 'mphongobeni@hotmail.com',
      profileImage: 'https://image.com/profile3',
      permission: 'Granted'
    }
  ];

  currentPage = 1;
  itemsPerPage = 3;
  totalPages = 3;

  ngOnInit() {
    this.totalPages = Math.ceil(this.caretakers.length / this.itemsPerPage);
  }

  get paginatedCaretakers() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.caretakers.slice(start, start + this.itemsPerPage);
  }

  get totalPagesArray() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  previousPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }
}
