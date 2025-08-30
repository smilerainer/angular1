import { Component } from '@angular/core';
import { StudentList } from '../models/student';

@Component({
  selector: 'app-studentinfo',
  imports: [],
  templateUrl: './studentinfo.html',
  styleUrl: './studentinfo.css'
})
export class Studentinfo {
// constructor(
//     private route: ActivatedRoute,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     this.studentId = Number(this.route.snapshot.paramMap.get('sno'));
//     this.student = this.students.find(s => s.sno === this.studentId);
//   }

  goBack() {
    console.log("here")
    // this.router.navigate(['/mainpage']);
  }
}
