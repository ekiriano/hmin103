import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Subscription, Observable } from 'rxjs';
import {CategorieService} from '../../services/categorie.service';
import {Category} from '../../models/Category';

@Component({
  selector: 'app-nav-partial',
  templateUrl: './nav-partial.component.html',
  styleUrls: ['./nav-partial.component.css']
})
export class NavPartialComponent implements OnInit {
  private authListenerSubs: Subscription;
  userIsAuthenticated = false;
  categories: Observable<Category[]>;
  constructor(private authService: AuthService, private  categorieService: CategorieService) { }

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService.getAuthStatusListener()
    .subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
    });
    this.categories =  this.categorieService.getCategories();
  }

  onLogout()
  {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

}
