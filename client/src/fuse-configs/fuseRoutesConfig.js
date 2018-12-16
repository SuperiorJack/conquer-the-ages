import React from 'react';
import { Redirect } from 'react-router-dom';
import { FuseUtils } from '@fuse/index';
import { ExampleConfig } from 'main/example/ExampleConfig';
import { RootConfig } from 'main/example/RootConfig';
import { LoginConfig } from 'main/login/LoginConfig';
import { RegisterConfig } from 'main/register/RegisterConfig';
import { LogoutConfig } from 'main/logout/LogoutConfig';
import { ProfilePageConfig } from 'main/profile/ProfilePageConfig';
import { ChatAppConfig } from 'main/chat/ChatAppConfig';
import { Error404PageConfig } from 'main/errors/404/Error404PageConfig';
import { Error500PageConfig } from 'main/errors/500/Error500PageConfig';

const routeConfigs = [
    ProfilePageConfig,
    LoginConfig,
    RegisterConfig,
    LogoutConfig,
    ExampleConfig,
    ChatAppConfig,
    Error404PageConfig,
    Error500PageConfig,
    RootConfig
];

export const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        component: () => <Redirect to="/pages/errors/error-404" />
    }
];
