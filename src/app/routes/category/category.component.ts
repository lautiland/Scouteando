import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  category: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category');
      this.closeMenu();
    });
  }
  routeChange() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.route.paramMap.subscribe(params => {
          this.category = params.get('category');
          this.closeMenu(); 
        });
      }
    });
  }

  closeMenu() {
    const menu = document.getElementById('menu_hamb') as HTMLInputElement;
    if (menu) {
      menu.checked = false;
    }
  }
}
