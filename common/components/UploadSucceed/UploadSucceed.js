import React from 'react';
import {connect} from 'react-redux';
import { push } from 'react-router-redux'

export default function UploadSucceed(Component) {

    class AuthenticatedComponent extends React.Component {

        componentWillMount() {
            this.checkUploaded();
        }

        componentWillReceiveProps(nextProps) {
            this.checkUploaded();
        }

        checkUploaded() {
            if (!this.props.uploadedFile) {
                this.props.redirect()
            }
        }

        render() {
            return (
                <div>
                    {this.props.uploadedFile === true
                        ? <Component {...this.props}/>
                        : null
                    }
                </div>
            )

        }
    }

    const mapStateToProps = (state) => ({
        uploadedFile: state.uploadedFile,
    });

    const mapDispatchToProps = (dispatch) => {
      return {
        redirect: (props) => {
          dispatch(push('/dashboard'))
        }
      }
    }

    return connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent);

}