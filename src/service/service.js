/**
 * Created by capri on 2017/8/3.
 */
import api from './api'
import ax from 'axios'
export function checkToken() {
  return ax.post(api.checkToken);
}
