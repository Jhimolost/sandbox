import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime, distinctUntilChanged, skip, Subscription } from 'rxjs';

@Component({
  selector: 'app-typeahead',
  standalone: false,
  templateUrl: './typeahead.component.html',
  styleUrl: './typeahead.component.scss'
})
export class TypeaheadComponent implements OnInit, OnDestroy {
  @ViewChild('typeaheadForm', { static: true }) searchForm!: NgForm;

  sub: Subscription | null = null;

  ngOnInit(): void {
    this.sub = this.searchForm.form.valueChanges.pipe(
      skip(1),
      distinctUntilChanged(),
      debounceTime(500)
    )
      .subscribe((value) => {
      console.log(value)
    });
  }

  ngOnDestroy(): void {
    this.sub!.unsubscribe();
  }
}
