import { Component, computed, DestroyRef, inject, input } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  // userId = input.required<string>();

  private userServices = inject(UsersService);
  userName = '';
  private activatedRoute = inject(ActivatedRoute);
  private destroy = inject(DestroyRef);
  // userName = computed(
  //   () => this.userServices.users.find((u) => u.id === this.userId())?.name
  // );

  ngOnInit() {
    console.log(this.activatedRoute);
    const subscription = this.activatedRoute.paramMap.subscribe({
      next: (paramMap) => {
        this.userName =
          this.userServices.users.find((u) => u.id === paramMap.get('userId'))
            ?.name || '';
      },
    });
    this.destroy.onDestroy(() => subscription.unsubscribe());
  }
}
