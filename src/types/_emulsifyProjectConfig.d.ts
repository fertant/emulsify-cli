/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface EmulsifyProjectConfiguration {
  /**
   * Contains information about the Emulsify project.
   */
  project: {
    /**
     * Name of the platform Emulsify is being used within.
     */
    platform: string;
  };
  /**
   * Contains information about the Emulsify starter this project is based upon
   */
  starter: {
    /**
     * Git repository containing the starter this project is based upon
     */
    repository: string;
  };
  /**
   * Contains information about the Emulsify system this project is utilizing
   */
  system?: {
    /**
     * Git repository containing the system this project is utilizing
     */
    repository: string;
    /**
     * Commit, branch, or tag of the system this project is utilizing
     */
    checkout: string;
  };
  /**
   * Contains information about the Emulsify system this project is utilizing
   */
  variant?: {
    /**
     * Name of the variant, usually indicating the platform for which the variant is intended, such as WordPress, or Drupal9
     */
    platform: 'drupal';
    /**
     * Array containing an object for each structure specified in the system to which this variant belongs
     */
    structureImplementations: {
      /**
       * Name of the structure being implemented. MUST correspond with the name of a structure specified within the variant's system
       */
      name: string;
      /**
       * Relative path to the folder that will hold all of the assets, components, and files related to the structure
       */
      directory: string;
    }[];
    /**
     * Git repository containing the system this project is utilizing
     */
    repository?: string;
    /**
     * Commit, branch, or tag of the system this project is utilizing
     */
    checkout?: string;
  };
}
