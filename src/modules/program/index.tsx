import React from 'react';
import { connect } from 'react-redux';
import { actions } from './actions';

interface ProgramProps {
    program: number;
    fetchProgram(id: number): void;
}

type ReduxProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
type Props = ProgramProps & ReduxProps;

class Program extends React.Component<Props> {
    componentWillMount(): void {
        // TODO: make the dynamic program view by replacing the below id with URL /:programId
        const id = 6771; // The Powerpuff Girls program id
        this.props.fetchProgram(id);
    }
    render() {
        return (
            <div className="Program">

            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    program: state.program,
});

const mapDispatchToProps = (dispatch: any) => ({
    fetchProgram: (id: number) => dispatch(actions.fetchProgram(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Program);
