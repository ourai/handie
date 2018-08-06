import { mixin } from 'handie/utils/collection';

/**
 * 判断是否为一个 RESTful 请求
 * 
 * @param {*} res 请求返回
 */
export function isRestful( res ) {
  return !(res !== undefined && hasOwnProp('success', res) && hasOwnProp('message', res));
}

/**
 * 初始化 Bootstrap 所提供的工具提示
 * 
 * https://getbootstrap.com/docs/3.3/javascript/#tooltips
 * 
 * @param {*} $el 目标元素
 * @param {*} opts 配置项
 */
export function initBootstrapTooltip( $el, opts ) {
  $el.tooltip(mixin(true, {placement: 'auto bottom', trigger: 'hover', container: 'body'}, opts));
}

export * from 'handie/utils/common/helper';
export * from 'handie/utils/common/supports';
export * from 'handie/utils/is/type';
export * from 'handie/utils/is/env';
export * from 'handie/utils/is/format';
export * from 'handie/utils/collection';

export * from './supports';
