import { Component } from '@angular/core';
import { TestService } from 'src/services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  x: number = 4;
  y: number = 2;
  constructor(public TestService: TestService) {}
  ngOnInit(): void {
    this.TestService.getService();
  }
  subtract = (x: number, y: number) => {
    return this.x - this.y;
  };
}
