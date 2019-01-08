import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { StatelessComponent } from '../StatelessComponent'

storiesOf('StatelessComponent', module).add('Regular', () => <StatelessComponent title="Title" />)
