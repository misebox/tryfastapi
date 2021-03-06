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
 * The UserSelect model module.
 * @module model/UserSelect
 * @version 0.1.0
 */
class UserSelect {
    /**
     * Constructs a new <code>UserSelect</code>.
     * @alias module:model/UserSelect
     * @param username {String} 
     * @param email {String} 
     * @param isActive {Boolean} 
     * @param isSuperuser {Boolean} 
     */
    constructor(username, email, isActive, isSuperuser) { 
        
        UserSelect.initialize(this, username, email, isActive, isSuperuser);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, username, email, isActive, isSuperuser) { 
        obj['username'] = username;
        obj['email'] = email;
        obj['is_active'] = isActive;
        obj['is_superuser'] = isSuperuser;
    }

    /**
     * Constructs a <code>UserSelect</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserSelect} obj Optional instance to populate.
     * @return {module:model/UserSelect} The populated <code>UserSelect</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserSelect();

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
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
 * @member {String} username
 */
UserSelect.prototype['username'] = undefined;

/**
 * @member {String} email
 */
UserSelect.prototype['email'] = undefined;

/**
 * @member {Boolean} is_active
 */
UserSelect.prototype['is_active'] = undefined;

/**
 * @member {Boolean} is_superuser
 */
UserSelect.prototype['is_superuser'] = undefined;






export default UserSelect;

