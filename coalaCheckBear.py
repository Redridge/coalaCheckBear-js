import os

from coalib.bearlib.abstractions.ExternalBearWrap import external_bear_wrap


@external_bear_wrap(executable='node',
                    settings={})
class coalaCheckBear:
    """
    Checks for coala written with uppercase 'C'
    """
    LANGUAGES = {'All'}
    REQUIREMENTS = {'node'}
    AUTHORS = {'Redridge'}
    AUTHORS_EMAILS = {'alexandros.dimos.95@gmail.com'}
    LICENSE = 'GPLv3'

    @staticmethod
    def create_arguments():
        return ('coalaCheck.js',)
