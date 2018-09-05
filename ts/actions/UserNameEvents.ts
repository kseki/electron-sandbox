import * as Redux from 'redux';
import { v4 as UUID } from 'uuid';

/**
 * ユーザー名を変更するアクション・タイプ
 */
export const CHANGE_USER_NAME = UUID();

/**
 * ユーザー名を変更するアクション
 */
export interface IChangeUserNameAction extends Redux.Action {
  name: string;
}

/**
 * ユーザ＝名変更アクション・クリエイター
 * @param name 変更する名前の文字列
 * @returns ユーザー名変更アクション
 */
export const createChangeUserNameAction: Redux.ActionCreator<IChangeUserNameAction> = (name: string) => {
  return {
    name,
    type: CHANGE_USER_NAME,
  };
};
