import { Component } from '@angular/core';
import { UsersService } from './services/users.service';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { User } from './interfaces/user.interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'act6Cyril';

    arrUsers: User[] = [];
    currentPage: number = 0;
    totalPages: number = 1;

    constructor(private usersService: UsersService) { }

    async ngOnInit(): Promise<void> {
        while (this.totalPages>this.currentPage) {
           this.currentPage+=1;
            console.log(this.currentPage);
            await this.gotoPage(this.currentPage); 
        }
    }

    async gotoPage(pNum: number = 1): Promise<void> {
        try {
            let response = await this.usersService.getAll(pNum)
            console.log(response);
            this.currentPage = response.page;
            this.totalPages = response.total_pages;
            this.arrUsers= (this.arrUsers.length==0)?
                                 response.results:
                                 [...this.arrUsers,...response.results];
            console.log(this.arrUsers);
        }
        catch (error) {
            console.log(error);
        }
    }
     

}


