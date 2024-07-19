import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GradeComponent } from './components/grade/grade.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileInformationComponent } from './profile-information/profile-information.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GradeComponent, ProfileInformationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'FrontEnd-DisciPlanner';
}
