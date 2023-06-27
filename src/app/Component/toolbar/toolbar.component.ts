import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/Account/account.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit{
  title = 'SportecSolution';

  constructor(private accountService:AccountService){
  }
  ngOnInit(): void {
  }
  
  logout()
  {
    this.accountService.logout();
  }

  isLoggedIn(): boolean {
    return this.accountService.isLoggedIn();
  }

}
