import { Component } from '@angular/core';
import { ListWithStorageService } from './list-with-storage.service';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-list-with-storage',
  standalone: false,
  templateUrl: './list-with-storage.component.html',
  styleUrl: './list-with-storage.component.scss'
})
export class ListWithStorageComponent {
  list;

  constructor(private service: ListWithStorageService) {
    this.list = this.service.list();
  }

  onAdd(loginForm: NgForm): void {
    const { key, value } = loginForm.form.getRawValue();

    this.service.add(key, value);
  }

  onUpdate(loginForm: NgForm): void {
    const { key, value } = loginForm.form.getRawValue();

    this.service.update(key, value);
  }

  onDelete(key: string): void {
    this.service.remove(key);
  }
}
