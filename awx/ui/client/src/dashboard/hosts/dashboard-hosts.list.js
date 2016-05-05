/*************************************************
* Copyright (c) 2015 Ansible, Inc.
*
* All Rights Reserved
*************************************************/


export default function(){
    return {
        name: 'hosts',
        iterator: 'host',
        selectTitle: 'Add Existing Hosts',
        editTitle: 'Hosts',
        listTitle: 'Hosts',
        index: false,
        hover: true,
        well: true,
        emptyListText: 'NO ACTIVE FAILURES FOUND',
        fields: {
            status: {
                basePath: 'unified_jobs',
                label: '',
                iconOnly: true,
                searchable: true,
                searchType: 'select',
                nosort: true,
                searchOptions: [],
                searchLabel: 'Job Status',
                icon: 'icon-job-{{ host.active_failures }}',
                awToolTip: '{{ host.badgeToolTip }}',
                awTipPlacement: 'right',
                dataPlacement: 'right',
                awPopOver: '{{ host.job_status_html }}',
                ngClick:'viewHost(host.id)',
                columnClass: 'col-lg-1 col-md-1 col-sm-2 col-xs-2 List-staticColumn--smallStatus'
            },
            name: {
                key: true,
                label: 'Name',
                columnClass: 'col-lg-5 col-md-5 col-sm-5 col-xs-8 ellipsis List-staticColumnAdjacent',
                ngClick: 'editHost(host.id)'
            },
            inventory_name: {
                label: 'Inventory',
                sourceModel: 'inventory',
                sourceField: 'name',
                columnClass: 'col-lg-5 col-md-4 col-sm-4 hidden-xs elllipsis',
                linkTo: "{{ '/#/inventories/' + host.inventory_id }}",
                searchable: false
            },
            enabled: {
                label: 'Status',
                columnClass: 'List-staticColumn--toggle',
                type: 'toggle',
                ngClick: 'toggleHostEnabled(host)',
                searchable: false,
                nosort: true,
                awToolTip: "<p>Indicates if a host is available and should be included in running jobs.</p><p>For hosts that are part of an external inventory, this flag cannot be changed. It will be set by the inventory sync process.</p>",
                dataTitle: 'Host Enabled',
            },
            has_active_failures: {
                label: 'Has failed jobs?',
                searchSingleValue: true,
                searchType: 'boolean',
                searchValue: 'true',
                searchOnly: true
            },
            has_inventory_sources: {
                label: 'Has external source?',
                searchSingleValue: true,
                searchType: 'boolean',
                searchValue: 'true',
                searchOnly: true
            }
        },

        fieldActions: {

            columnClass: 'col-lg-2 col-md-3 col-sm-3 col-xs-4',
            edit: {
                label: 'Edit',
                ngClick: 'editHost(host.id)',
                icon: 'icon-edit',
                awToolTip: 'Edit host',
                dataPlacement: 'top'
            }
        },

        actions: {

        }
    };
}