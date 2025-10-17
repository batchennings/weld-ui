import React from 'react';
import { Page } from '@/components/templates/Page';
import { Button } from '@/components/atoms/Button';
import { Table } from '@/components/organisms/Table';
import { tableData, tableColumns, tableActions } from '@/mock/table';
import { Plus, Cog, ArrowDown } from '@/icons';

const ExamplePage = () => {
    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Projects', href: '/projects' },
        { label: 'Current Project', current: true },
    ];

    const metadata = [
        { label: 'Status', value: 'Active' },
        { label: 'Last Updated', value: '2 hours ago' },
        { label: 'Created', value: 'Jan 15, 2024' },
        { label: 'Owner', value: 'John Doe' },
        { label: 'Team', value: 'Engineering' },
        { label: 'Progress', value: '75%' },
    ];

    const tabs = [
        {
            id: 'overview',
            label: 'Overview',
            content: (
                <div className="p-4 bg-base-bg-color-hover rounded-lg">
                    <h3 className="text-lg font-medium mb-2">Project Overview</h3>
                    <p className="text-base-text-color-secondary">
                        This is the overview tab content. You can add any content here.
                    </p>
                </div>
            ),
        },
        {
            id: 'details',
            label: 'Details',
            content: (
                <div className="p-4 bg-base-bg-color-hover rounded-lg">
                    <h3 className="text-lg font-medium mb-2">Project Details</h3>
                    <p className="text-base-text-color-secondary">
                        This is the details tab content. You can add any content here.
                    </p>
                </div>
            ),
        },
        {
            id: 'settings',
            label: 'Settings',
            content: (
                <div className="p-4 bg-base-bg-color-hover rounded-lg">
                    <h3 className="text-lg font-medium mb-2">Project Settings</h3>
                    <p className="text-base-text-color-secondary">
                        This is the settings tab content. You can add any content here.
                    </p>
                </div>
            ),
        },
    ];

    const headerActions = (
        <div className="flex items-center gap-3">
            <Button
                type="secondary"
                size="md"
                Icon={ArrowDown}
                label="Export"
            />
            <Button
                type="secondary"
                size="md"
                Icon={Cog}
                label="Settings"
            />
            <Button
                type="primary"
                size="md"
                Icon={Plus}
                label="Add Item"
            />
        </div>
    );

    return (
        <Page
            breadcrumbs={breadcrumbs}
            title="Project Dashboard"
            subtitle="Manage your project settings and view analytics"
            metadata={metadata}
            tabs={tabs}
            headerActions={headerActions}
        >
            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-6 bg-base-bg-color-regular rounded-lg border border-form-border-color">
                        <h3 className="text-lg font-medium mb-2">Total Users</h3>
                        <p className="text-3xl font-bold text-base-text-color-primary">1,234</p>
                        <p className="text-sm text-base-text-color-secondary">+12% from last month</p>
                    </div>
                    <div className="p-6 bg-base-bg-color-regular rounded-lg border border-form-border-color">
                        <h3 className="text-lg font-medium mb-2">Active Sessions</h3>
                        <p className="text-3xl font-bold text-base-text-color-primary">567</p>
                        <p className="text-sm text-base-text-color-secondary">+8% from last month</p>
                    </div>
                    <div className="p-6 bg-base-bg-color-regular rounded-lg border border-form-border-color">
                        <h3 className="text-lg font-medium mb-2">Conversion Rate</h3>
                        <p className="text-3xl font-bold text-base-text-color-primary">3.2%</p>
                        <p className="text-sm text-base-text-color-secondary">+0.5% from last month</p>
                    </div>
                </div>
                
                <div className="bg-base-bg-color-regular rounded-lg border border-form-border-color">
                    <div className="p-6 border-b border-form-border-color">
                        <h3 className="text-lg font-medium">Recent Activity</h3>
                    </div>
                    <div className="p-6">
                        <Table 
                            data={tableData.slice(0, 10)} 
                            columns={tableColumns} 
                            actions={tableActions}
                        />
                    </div>
                </div>
            </div>
        </Page>
    );
};

export default ExamplePage;
