/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UserUpdate model module.
 * @module model/UserUpdate
 * @version 0.1.0
 */
class UserUpdate {
    /**
     * Constructs a new <code>UserUpdate</code>.
     * @alias module:model/UserUpdate
     * @param id {Number} 
     * @param username {String} 
     * @param email {String} 
     * @param password {String} 
     * @param isActive {Boolean} 
     * @param isSuperuser {Boolean} 
     */
    constructor(id, username, email, password, isActive, isSuperuser) { 
        
        UserUpdate.initialize(this, id, username, email, password, isActive, isSuperuser);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, username, email, password, isActive, isSuperuser) { 
        obj['id'] = id;
        obj['username'] = username;
        obj['email'] = email;
        obj['password'] = password;
        obj['is_active'] = isActive;
        obj['is_superuser'] = isSuperuser;
    }

    /**
     * Constructs a <code>UserUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserUpdate} obj Optional instance to populate.
     * @return {module:model/UserUpdate} The populated <code>UserUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserUpdate();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('is_active')) {
                obj['is_active'] = ApiClient.convertToType(data['is_active'], 'Boolean');
            }
            if (data.hasOwnProperty('is_superuser')) {
                obj['is_superuser'] = ApiClient.convertToType(data['is_superuser'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
UserUpdate.prototype['id'] = undefined;

/**
 * @member {String} username
 */
UserUpdate.prototype['username'] = undefined;

/**
 * @member {String} email
 */
UserUpdate.prototype['email'] = undefined;

/**
 * @member {String} password
 */
UserUpdate.prototype['password'] = undefined;

/**
 * @member {Boolean} is_active
 */
UserUpdate.prototype['is_active'] = undefined;

/**
 * @member {Boolean} is_superuser
 */
UserUpdate.prototype['is_superuser'] = undefined;






export default UserUpdate;

