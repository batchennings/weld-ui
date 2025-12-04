# Weld UI

A modern React component library built with Tailwind CSS and Radix UI primitives.

## Installation

```bash
npm install @batchennings/weld-ui
```

or

```bash
yarn add @batchennings/weld-ui
```

or

```bash
pnpm add @batchennings/weld-ui
```

## Requirements

- React 18.0.0 or higher
- React DOM 18.0.0 or higher

## Setup

### 1. Install Peer Dependencies

This library requires several peer dependencies to work correctly:

```bash
npm install react react-dom @radix-ui/react-* class-variance-authority clsx tailwind-merge
```

### 2. Configure Tailwind CSS

**Important:** This component library requires Tailwind CSS to be configured in your project. Add the following to your `tailwind.config.js`:

```js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@batchennings/weld-ui/dist/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      // Your theme customizations
    },
  },
  plugins: [],
};
```

## Usage

### Basic Example

```tsx
import { Button, Alert, Table } from '@batchennings/weld-ui';

function App() {
  return (
    <div>
      <Button label="Click me" type="primary" size="md" />
      
      <Alert 
        type="info"
        title="Information"
        content="This is an informational message"
      />
    </div>
  );
}
```

## Components

### Atoms

Basic building blocks of the UI:

- **Alert** - Display important messages with different severity levels
- **Breadcrumb** - Navigation breadcrumbs
- **Button** - Versatile button component with multiple variants
- **CheckboxGroup** - Grouped checkbox inputs
- **Dropdown** - Dropdown menu component
- **InputText** - Text input field
- **Label** - Form label component
- **ListItem** - List item component
- **Pill** - Pill/badge component for tags and labels
- **RadioGroup** - Grouped radio button inputs
- **Select** - Select dropdown component
- **Switch** - Toggle switch component
- **Tabs** - Tabbed interface component

### Organisms

Complex components composed of multiple atoms:

- **NavigationBar** - Application navigation bar
- **Table** - Data table with sorting and pagination
- **TableCell** - Table cell component
- **TableRow** - Table row component

### Templates

Full page layouts:

- **Page** - Complete page template with header, navigation, breadcrumbs, and content areas

## Component Examples

### Button

```tsx
import { Button } from '@batchennings/weld-ui';

<Button 
  label="Primary Button" 
  type="primary" 
  size="md" 
  onClick={() => console.log('clicked')}
/>

<Button 
  label="Secondary" 
  type="secondary" 
  size="sm" 
/>

<Button 
  label="Destructive" 
  type="destructive" 
  disabled 
/>
```

### Alert

```tsx
import { Alert } from '@batchennings/weld-ui';

<Alert 
  type="info"
  title="Information"
  content="This is an informational message"
/>

<Alert 
  type="warning"
  title="Warning"
  content="This is a warning message"
  action="Dismiss"
/>

<Alert 
  type="success"
  title="Success"
  content="Operation completed successfully"
/>
```

### Table

```tsx
import { Table } from '@batchennings/weld-ui';

const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

const columns = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
];

<Table 
  data={data}
  columns={columns}
  onRowClick={(row) => console.log('Row clicked:', row)}
/>
```

### Page Template

```tsx
import { Page } from '@batchennings/weld-ui';

<Page
  breadcrumbs={[
    { label: 'Home', href: '/' },
    { label: 'Dashboard', current: true },
  ]}
  title="Dashboard"
  subtitle="Welcome to your dashboard"
  metadata={[
    { label: 'Status', value: 'Active' },
    { label: 'Users', value: '1,234' },
  ]}
  navigationProps={{
    // Navigation configuration
  }}
>
  {/* Your page content */}
</Page>
```

## Utility Functions

### cn (className utility)

Merge and deduplicate Tailwind CSS classes:

```tsx
import { cn } from '@batchennings/weld-ui';

const className = cn(
  'base-class',
  condition && 'conditional-class',
  'additional-class'
);
```

## TypeScript Support

This library is written in TypeScript and provides full type definitions. Import types as needed:

```tsx
import type { ButtonProps, AlertProps, PageProps } from '@batchennings/weld-ui';
```

## Styling

All components use Tailwind CSS utility classes and CSS variables for theming. You can customize the appearance by:

1. Overriding CSS variables in your global styles
2. Extending Tailwind configuration
3. Using the `className` prop available on most components

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Support

For issues and questions, please open an issue on the GitHub repository.
