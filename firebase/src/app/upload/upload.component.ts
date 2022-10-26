import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  picUrl = "";

  constructor(private router: Router, private storage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  goToHome() {
    this.router.navigate(['home']);
  }

  onFileSelected(e: any) {
    const file = e.target.files[0];
    const ts = Date.now();
    const filePath = `images/${ts}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((downloadURL) => {
          this.picUrl = downloadURL;
          alert("File uploaded successfully");
        });
      })
    ).subscribe();
  }

}
