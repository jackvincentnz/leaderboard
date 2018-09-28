// src/components/leaderboard/index.tsx

import * as React from 'react';
import Result from './Result';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

export interface Props {
    results: Array<Result>;
}

class Leaderboard extends React.Component<Props> {    
    
    render() {
        const listItems = this.props.results.map((result: Result) =>
            <TableRow key={result.id}>
                <TableCell component="th" scope="row">{result.id}</TableCell>
                <TableCell>{result.name}</TableCell>
                <TableCell>{result.time}</TableCell>
            </TableRow>
        );

        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Time</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listItems}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default Leaderboard;