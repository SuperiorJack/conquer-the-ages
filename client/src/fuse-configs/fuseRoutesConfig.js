import React from 'react';
import { Redirect } from 'react-router-dom';
import { FuseUtils } from '@fuse/index';
import { ExampleConfig } from 'main/content/example/ExampleConfig';
import { LoginConfig } from 'main/content/login/LoginConfig';
import { RegisterConfig } from 'main/content/register/RegisterConfig';
import { LogoutConfig } from 'main/content/logout/LogoutConfig';
import { pagesConfigs } from 'main/content/pages/pagesConfigs';

const routeConfigs = [
    ...pagesConfigs,
    LoginConfig,
    RegisterConfig,
    LogoutConfig,
    ExampleConfig
];

export const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        component: () => <Redirect to="/pages/errors/error-404" />
    }
];
