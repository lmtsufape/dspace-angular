import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { find } from 'rxjs/operators';

import { hasValue, isEmpty } from '../../empty.util';
import { RemoteData } from '../../../core/data/remote-data';
import { ResourcePolicy } from '../../../core/resource-policy/models/resource-policy.model';
import { ResourcePolicyService } from '../../../core/resource-policy/resource-policy.service';
import { followLink } from '../../utils/follow-link-config.model';

/**
 * This class represents a resolver that requests a specific item before the route is activated
 */
@Injectable()
export class ResourcePolicyResolver implements Resolve<RemoteData<ResourcePolicy>> {

  constructor(private resourcePolicyService: ResourcePolicyService, private router: Router) {
  }

  /**
   * Method for resolving an item based on the parameters in the current route
   * @param {ActivatedRouteSnapshot} route The current ActivatedRouteSnapshot
   * @param {RouterStateSnapshot} state The current RouterStateSnapshot
   * @returns Observable<<RemoteData<Item>> Emits the found item based on the parameters in the current route,
   * or an error if something went wrong
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RemoteData<ResourcePolicy>> {
    const policyId = route.queryParamMap.get('policyId');

    if (isEmpty(policyId)) {
      this.router.navigateByUrl('/404', { skipLocationChange: true });
    }

    return this.resourcePolicyService.findById(policyId, followLink('eperson'), followLink('group')).pipe(
      find((RD) => hasValue(RD.error) || RD.hasSucceeded),
    );
  }
}
