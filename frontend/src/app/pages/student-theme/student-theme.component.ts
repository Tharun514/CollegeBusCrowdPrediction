import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-student-theme',
  templateUrl: './student-theme.component.html',
  styleUrls: ['./student-theme.component.css']
})
export class StudentThemeComponent implements OnInit {

  selectedTheme: string = 'light';

  constructor(
    private toast: ToastService
  ) { }

  ngOnInit(): void {

    const savedTheme = localStorage.getItem('student-theme');

    if (savedTheme) {
      this.selectedTheme = savedTheme;
    }

    this.applyTheme();

  }

  selectTheme(theme: string): void {

    this.selectedTheme = theme;

  }

  saveTheme(): void {

    localStorage.setItem(
      'student-theme',
      this.selectedTheme
    );

    this.applyTheme();

    this.toast.success('Theme Updated Successfully');

  }

  applyTheme(): void {

    document.body.classList.remove(
      'light-theme',
      'dark-theme'
    );

    switch (this.selectedTheme) {

      case 'dark':

        document.body.classList.add('dark-theme');

        break;

      case 'system':

        if (
          window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches
        ) {

          document.body.classList.add('dark-theme');

        } else {

          document.body.classList.add('light-theme');

        }

        break;

      default:

        document.body.classList.add('light-theme');

        break;

    }

  }

}