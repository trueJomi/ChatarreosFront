import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: any) => {

      const { params } = paramMap
      console.log(sessionStorage.getItem('key'))
      console.log('params : ', paramMap)
      sessionStorage.setItem('param', params.id);
      this.router.navigate([`/chatarrero/home/${sessionStorage.getItem('idShopper')}`])
    })
  }

}
