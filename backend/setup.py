from setuptools import setup

setup(
    name='backend',
    version='0.1.0',
    packages=['backend'],
    include_package_data=True,
    install_requires=[
        'arrow==0.15.5',
        'bs4==0.0.1',
        'Flask==1.1.1',
        'html5validator==0.3.3',
        'pycodestyle==2.5.0',
        'pydocstyle==5.0.2',
        'pylint==2.4.4',
        'pytest==5.3.5',
        'pytest-flask==0.15.1',
        'requests==2.22.0',
        'selenium==3.141.0',
        'sh==1.12.14',
        'flask-cors==3.0.9'
    ],
)
